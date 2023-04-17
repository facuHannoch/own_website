import { SuperfaceClient } from '@superfaceai/one-sdk'
const { MongoClient, ServerApiVersion } = require('mongodb');
const sgMail = require('@sendgrid/mail')

const sdk = new SuperfaceClient();

// Just check if all required fields are provided
function formValid(body: any): boolean {
    return body.email;
}

interface msg {
    from: string | undefined,
    to: string | undefined,
    subject: string,
    text: string,
    html: string,
}

export default async function handler(req: any, res: any) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const body = req.body;

    if (!formValid(body)) {
        res.status(422).end();
        return false;
    }

    const profile = await sdk.getProfile('communication/send-email@2.1.0');
    const message = `
    Email: ${body.email},\n
    Phone: ${body.phone},\n
    Name: ${body.first} ${body.last},\n
    Message: |${body.message}|
    `;
    const msg: msg = {
        from: process.env.FROM_EMAIL,
        to: process.env.TO_EMAIL,
        subject: 'Message from contact form',
        text: message,
        html: message,
    }
    console.log(message)
    console.log("-----")

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
            res.status(200).end()
        })
        .catch((error: any) => {
            console.error(error)
            // saveInfoOnError(msg)
            res.status(500).end()
        })

}

export async function superfaceAiHandler(req: any, res: any) {
    const body = req.body;

    if (!formValid(body)) {
        res.status(422).end();
        return;
    }

    const profile = await sdk.getProfile('communication/send-email@2.1.0');
    const message = `
    Email: ${body.email}
    Phone: ${body.phone}
    Name: ${body.first} ${body.last}
    Message: ${body.message} 
    `;
    const result = await profile.getUseCase('SendEmail').perform(
        {
            from: process.env.FROM_EMAIL,
            to: process.env.TO_EMAIL,
            subject: 'Message from contact form',
            text: message,
        },
        {
            provider: 'sendgrid',
            security: {
                bearer_token: {
                    token: process.env.SENDGRID_API_KEY,
                },
            },
        }
    );

    try {
        const data = result.unwrap();
        console.log(data);
        res.status(201).end();
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
}

function saveInfoOnError(message: msg): void {
    const uri = `mongodb+srv://admin-facundo:${process.env.MONGODBPASSWORD}@cluster0.bzw7g.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            stric: true,
            deprecationErrors: true,
        }
    })

    async function run() {
        try {
            await client.connect()
            await client.db("admin").command({ ping: 1 })

        } finally {
            await client.close()
        }
    }

    const result = run().catch(console.dir)

    console.log(result)

    var axios = require('axios');
    var data = JSON.stringify({
        "collection": "get-in.touch-emails",
        "database": "personal-list",
        "dataSource": "Cluster0",
        "projection": {
            "_id": 1
        }
    });

    var config = {
        method: 'post',
        url: 'https://sa-east-1.aws.data.mongodb-api.com/app/data-gxaml/endpoint/data/v1/action/findOne',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': process.env.MONGODBKEY,
        },
        data: data
    };

    axios(config)
        .then(function (response: any) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error: any) {
            console.log(error);
        });
}