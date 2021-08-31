const CustomAnalytics = CustomAnalytics || {};

CustomAnalytics.collector = {
    collect: (context) => {
        if(!context || !context.eventAction || !context.eventName || !context.message) return;
        try {
            ga('send', 'event', context.eventName, context.eventAction, context.message);
        } catch(e) {
            //ignore silently
        }
      }
};