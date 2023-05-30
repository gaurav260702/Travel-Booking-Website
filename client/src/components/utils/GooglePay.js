import React from 'react'
import GooglePayButton from '@google-pay/button-react'

function GooglePay(props) {
  const onSuccess = (payment) => {
    // Congratulation, it came here means everything's fine!
    console.log("The payment was succeeded!", payment);
    // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    this.props.onSuccess(payment);

}

const onCancel = (data) => {
    console.log('The payment was cancelled!', data);
}

const onError = (err) => {
    console.log("Error!", err);
}

  return (
    <GooglePayButton onClick={props.onSuccess}
      environment="TEST"
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['AMEX', 'DISCOVER', 'INTERAC', 'JCB', 'MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'example',
                gatewayMerchantId: 'https://tez.google.pay',
              },
            },
          },
        ],
        merchantInfo: {
          // @todo a merchant ID is available for a production environment after approval by Google.
          merchantId: '01234567890123456789',
          merchantName: 'Demo Merchant',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: props.toPay+"",
          currencyCode:'INR',
          countryCode: 'IN',
        },
        callbackIntents: ['PAYMENT_AUTHORIZATION'],
      }}
      onLoadPaymentData={(paymentRequest) => {
        console.log('Success', paymentRequest)
      }}
      onPaymentAuthorized={(paymentData) => {
        console.log('Payment Authorised Success', paymentData)
        onSuccess(paymentData);
        return { transactionState: 'SUCCESS' }
      }}
      existingPaymentMethodRequired={false}
      buttonColor='white'
      buttonType='buy'
      cookiePolicy='single-host-origin'
    />
  )
}

export default GooglePay