const axios = require("axios");
const globals = require("node-global-storage");
const {v4 : uuidv4} = require("uuid");

class paymentController {

    bkauh_heders = async () => {
        return {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: globals.getValue("id_token"),
            "X-App-Key": process.env.bkash_api_key 
        }
    }

    payment_create = async (req, res) => {
        const {amount} = req.body;

        try {
            const {data} = await axios.post(process.env.bkash_create_payment_url, {
                mode: "0011",
                payerReference: " ",
                callbackURL: "http://localhost:5000/bkash/payment/collback",
                amount: amount,
                currency: "BDT",
                intent: "sale",
                merchantInvoiceNumber: "Inv" + uuidv4().substring(0, 5) 
            }, {
                headers: await this.bkauh_heders()
            });

            // console.log(data)
            // return res.status(200).json({ bkauhURL : data.bkauhURL })
        } catch (error) {
            res.status(404).json({error: error.message})
        }
    }
}

module.exports = new paymentController();
