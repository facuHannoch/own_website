import { SuperfaceClient } from '@superfaceai/one-sdk'

const sgMail = require('@sendgrid/mail')

const sdk = new SuperfaceClient();

// Just check if all required fields are provided
function formValid(body: any) {
    return body.email && body.phone && body.first && body.last;
}

export default async function handler(req: any, res: any) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
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

    const msg = {
        from: process.env.FROM_EMAIL,
        to: process.env.TO_EMAIL,
        subject: 'Message from contact form',
        text: message,
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error: any) => {
            console.error(error)
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