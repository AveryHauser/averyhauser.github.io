---
title: 'Setting Up Homelab Wifi'
date: '2025-11-3'
slug: '001-homelab-wifi-setup'
---

I’ve been exploring options for setting up a soft router mini PC to run OPNsense, but the most affordable dedicated device I found was around $120 USD. To cut costs, I decided to experiment with Proxmox, allowing me to virtualize OPNsense on an older computer I already had. The machine is about ten years old and can’t run Windows 11, but that actually makes it perfect for this project—and a good opportunity to see what else I can host through Proxmox.

To handle networking, I ordered a Dell THGMP Intel I350-T4 4-Port 1Gbps Ethernet card, which I plan to pass through directly to the OPNsense virtual machine. This NIC will serve as the main interface for connecting other devices. I found it on eBay for $41 USD, a solid price considering it uses an Intel chipset known for good compatibility with OPNsense.

Since I also want Wi-Fi access for devices like the ESP32 or other hardware without Ethernet ports, I picked up a TP-Link AX1800 Wi-Fi 6 access point. It should be future-proof enough for now, and at $31 USD, it was a good deal. The access point will be limited by the 1Gbps NIC, but I can always upgrade later if it becomes a bottleneck.

All the hardware has been ordered and is on the way. My next update will cover the setup process and performance results. I also plan to configure a second desktop on the same network once the internet connection is stable. After that, I’ll set up port forwarding on my homelab so I can securely access everything remotely via WireGuard.