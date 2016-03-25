exports.nls = function() {
    return {
        title: "Flex Me",
        pages: {
            home: {
                title: "Flex Me! - Welcome To Flex Me!",
                greeting: "Welcome to Flex Me!",
                short_description_1: "Downgrade your plans based on your usages and save more today!",
                short_description_2: "You're probably not using what you're paying for. View your usage patterns and see where you can save today!",
                short_description_3: "Don't worry you can always Flex incase your usage changes!"
            },
            setup: {
                title: "Flex Me! - Setup",
                greeting: "You have the following accounts setup!",
                short_description_1: "You're probably not using what you're paying for. View your usage patterns and see where you can save today!"
            },
            usage: {
                title: "Flex Me! - Usage",
                headline: "Here is what we got from your usage history.",
                summary1: "Looks like you would save $90 / month which we will use to setup an emergency fund for you.",
                summary2: "You can claim it in case of an emergency!"

            },
            save: {
                title: "Flex Me! - Create emergency fund!",
                headline: "Good job! Set a goal for this emergency fund?",
            },
            done: {
                title: "Flex Me! - Create emergency fund!",
                headline: "",
                summary1: "You can claim this money in case of an emergency",
                summary2: "If your savings cross this limit we will initiate a direct deposit and you can enjoy a little extra cash!"
            }
        },
        providers: [
            {
                name: "Verizon Wireless"
            },
            {
                name: "Comcast Internet"
            },
            {
                name: "Time Warner Cable"
            }
        ]
    }
};
