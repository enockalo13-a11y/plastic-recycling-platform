# Plastic Recycling Platform (Accra)

A logistics platform that connects **households**, **informal waste pickers and aggregators**, and **recyclers/processors** in Accra, with **mobile money payouts** and an **EPR (Extended Producer Responsibility) compliance** angle.

**Authors:** Enock Alo (technology) and Rahma Ali Tahiru (accounts and finance)

> Status: early-stage prototype. This started as an entrepreneurship course project and is being tested against real customer discovery findings.

## The problem

Accra generates large volumes of plastic waste, but collection is fragmented. Households have no easy way to hand over recyclable plastic, waste pickers work informally with little visibility or bargaining power, and processors struggle to source consistent, traceable volumes.

## How it works

1. **Households** request a pickup for sorted plastic.
2. **Pickers and aggregators** receive and fulfil pickup requests along their routes.
3. **Recyclers/processors** buy collected material and fund the system through processor fees.
4. **Payouts** go to pickers and aggregators by mobile money.
5. **Records** of volumes collected support EPR compliance reporting.

## What customer discovery changed

We interviewed 5 waste pickers and 3 households. Two assumptions changed:

| Original assumption | What we found | Revised model |
| --- | --- | --- |
| Households would pay a pickup fee | Households resist paying any fee | Pickup is free for households, funded by processor fees |
| Pickers work independently | Pickers already sell through an informal aggregator | Work with aggregators rather than around them |

See [`docs/validation-findings.md`](docs/validation-findings.md) for more.

## Repository layout

```
.
├── README.md
├── docs/                  Project notes, pitch material, validation findings
└── src/                   Prototype web app (static, no backend yet)
    ├── index.html         Household pickup request page
    ├── aggregator.html    Aggregator view of incoming requests
    ├── css/style.css
    └── js/
        ├── app.js         Request handling (stored in the browser for now)
        └── payout.js      Placeholder for mobile money payouts
```

## Running the prototype

No build step is needed. Open `src/index.html` in a browser, or serve the folder locally:

```bash
cd src
python3 -m http.server 8000
```

Then visit http://localhost:8000.

Requests are saved in the browser's local storage, so they are only visible on the same device. A real backend and database come later.

## Roadmap

- [ ] Backend and database for pickup requests
- [ ] Aggregator accounts and route assignment
- [ ] Mobile money payout integration
- [ ] Volume tracking and EPR compliance reports
- [ ] Processor dashboard and fee handling

## License

Not yet chosen.
