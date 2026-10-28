// Placeholder for mobile money payouts to pickers and aggregators.
//
// Real payouts need a payment provider's API and must run on a server, never
// in the browser, because they require secret keys. Decide which mobile money
// networks and provider to support after talking to aggregators.

async function sendPayout(/* { phone, amount, network, reference } */) {
  throw new Error("Mobile money payouts are not implemented yet.");
}
