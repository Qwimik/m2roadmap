// Instantiating jQuery UI Widgets e.g. JavaScript form validation
// Introduction to the collapsible jQuery UI Widget
// Persisting the state of a collapsible jQuery UI Widget
// Adding a trigger element to a collapsible jQuery UI Widget
// Adding animation to a collapsible jQuery UI Widget

define(['jquery', 'collapsible'], ($)=>{
    return (config, element) => {
        $(element).collapsible({
            "collapsible": true,
            "openedState": "active",
            "active": false,
            "animate":{ "duration" :1000, "easing":"easeOutCubic"}
        });
    };
});
