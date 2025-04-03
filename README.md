# WhatsApp Heart Favorites
<!-- ✅ -->

A Chrome extension that automatically stars messages when you react with a heart emoji on WhatsApp Web.

## Description
<!-- ✅ -->

WhatsApp Heart Favorites enhances your WhatsApp Web experience by automatically starring messages that you react to with a heart emoji (❤️). This makes it easier to keep track of important messages without having to manually star them.

## Features
<!-- ✅ -->

- Automatically stars messages when you add a heart reaction
- Works seamlessly with WhatsApp Web
- Lightweight and unobtrusive

## Installation

### From Chrome Web Store

1. Visit the Chrome Web Store (link to be added)
    - [Chrome Web Store](https://chrome.google.com/webstore/detail/whatsapp-heart-favorites/your-extension-id) (TODO)
2. Click "Add to Chrome"
3. Confirm the installation

### Manual Installation
<!-- ✅ -->

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top-right corner
4. Click "Load unpacked" and select the downloaded folder
5. The extension should now be installed and active

## Usage
<!-- ✅ -->

1. Open WhatsApp Web (https://web.whatsapp.com/)
2. React to any message with a heart emoji (❤️)
3. The message will be automatically starred
4. Remove the heart reaction to unstar the message
5. The star will be removed from the message

## How It Works
<!-- ✅ -->

The extension injects a script into WhatsApp Web that:

1. Accesses WhatsApp's internal JavaScript modules
2. Adds a new callback for the heart reaction
3. This new callback triggers the star message function

## Permissions
<!-- ✅ -->

This extension requires the following permissions:

- `activeTab`: To interact with the WhatsApp Web page
- `scripting`: To inject scripts into the page
- Access to `https://web.whatsapp.com/*`: To function on WhatsApp Web

## Development
<!-- ✅ -->

The extension consists of:

- `manifest.json`: Extension configuration
- `content-script.js`: Detects when WhatsApp Web is loaded and injects the main script
- `injected.js`: Contains the core functionality for detecting reactions and starring messages
