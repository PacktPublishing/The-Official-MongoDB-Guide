// Switch to the config database
use config

// Ensure the balancer is running
sh.startBalancer()

// Set the activeWindow field for the balancer
// Replace <start-time> and <end-time> with values in HH:MM format

db.settings.updateOne(
   { _id: "balancer" },
   { $set: {
      activeWindow: {start: "<start-time>", stop: "<end-time>"}
   }},
   { upsert: true }
)
