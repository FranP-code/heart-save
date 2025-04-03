const EMOJI_TARGET = "❤"; // Acting like ❤️ on Whatsapp

(function () {
	console.log("WhatsApp Heart Favorites script - Candidate Test");

	// Initialize WhatsApp Store access
	function initializeWAStore() {
		window.Store = null;

		// Wait for WhatsApp to initialize its modules
		const storeCheckInterval = setInterval(() => {
			if (window.Store) {
				clearInterval(storeCheckInterval);
				console.log("WhatsApp store already initialized");
				setupReactionListener();
				return;
			}

			if (typeof window.require === "function") {
				try {
					if (!window.require("WAWebCollections").Reactions._models?.length) {
						console.log("Not injected. Still not defined");
						return;
					}
					// Load the essential modules
					window.Store = Object.assign({}, window.require("WAWebCollections"));
					window.Store.Cmd = window.require("WAWebCmd").Cmd;

					clearInterval(storeCheckInterval);
					console.log("WhatsApp store initialized");
					setupReactionListener();
				} catch (error) {
					console.error("Error initializing WhatsApp store:", error);
				}
			}
		}, 1000);
	}

	// Set up listeners for heart reactions
	function setupReactionListener() {
		//
		// CANDIDATE TASK: Write code that will star a message when you react to it with a heart emoji ✅
		//
		// Hints:
		// 1. You'll need to listen for reaction events using Store.Reactions
		// 2. Check if the reaction is a heart emoji (❤️)
		// 3. Use Store.Msg to get the message object
		// 4. Use Store.Chat to get the chat object
		// 5. Use Store.Cmd.sendStarMsgs to star the message
		//
		// Your code should detect when the user adds a heart reaction and then
		// automatically star that message in the chat
		//
		// TIP: You can inspect WhatsApp modules directly in your Chrome console by typing:
		// require("WAWebCmd") or any other module name. This will show you available methods,
		// _events, and other properties that might be helpful for this task.

		Store.Reactions._models.forEach((model) => {
			model.reactions._events.add = [
				...model.reactions._events.add,
				{
					callback: async (...args) => {
						if (args[0].__x_aggregateEmoji === EMOJI_TARGET) {
							const msgKey = args[1].parent.__x_id._serialized;
							const msg = Store.Msg.get(msgKey);
							const chat = await Store.Chat.find(msg.id.remote);
							const messageHasStar = msg.__x_star;

							if (!messageHasStar) {
								Store.Cmd.sendStarMsgs(chat, [msg], false);
							} else {
								Store.Cmd.sendUnstarMsgs(chat, [msg], false);
							}
						}
					},
				},
			];
		});
	}

	// Initialize
	initializeWAStore();
})();
