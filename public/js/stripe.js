/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51KJR6uSGNzLgk2Pb54i9y9IB2sHy7OytxjM6brlB2UEytbPOJzNoAhjxjwbm0Oa6wjtB85KEmMrmyFFlmo7un8ex00Vp0M4kSV'
);

export const bookTour = async (tourId) => {
  try {
    //1) Get checkout session from API
    const session = await axios({
      method: 'GET',
      url: `/api/v1/bookings/checkout-session/${tourId}`,
    });
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err.response.data.message);
  }
};
