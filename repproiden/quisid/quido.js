const { WalletServiceClient } = require('@google-cloud/wallet-v1');
const walletSigner = new WalletServiceClient();

// Assuming the use case is to create a digital wallet and add a payment method
async function createWalletAndAddPayment(userId, paymentMethodDetails) {
  try {
    const wallet = await walletSigner.createWallet({ userId });
    const paymentMethod = await walletSigner.addPaymentMethod(wallet.id, paymentMethodDetails);
    return { wallet, paymentMethod };
  } catch (error) {
    console.error('Failed to create wallet or add payment method:', error);
    throw error;
  }
}

// Example usage
(async () => {
  const userId = 'user123';
  const paymentMethodDetails = {
    type: 'CARD',
    cardDetails: {
      cardNumber: '1234567890123456',
      expiryMonth: '12',
      expiryYear: '2030',
      cvv: '123'
    }
  };

  try {
    const { wallet, paymentMethod } = await createWalletAndAddPayment(userId, paymentMethodDetails);
    console.log('Wallet created with ID:', wallet.id);
    console.log('Payment method added with ID:', paymentMethod.id);
  } catch (error) {
    console.error('Error:', error);
  }
})();
