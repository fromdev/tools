var CustomAnalytics = CustomAnalytics || {};

CustomAnalytics.collector = {
    collect: (context) => {
        if(!context || !context.eventAction || !context.eventName || !context.message) return;
        
        try {
            ga('send', 'event', context.eventName, context.eventAction, context.message);
        } catch(e) {
            //ignore silently
        }
      },
      collectError: (context, err) => {
        context.errorContext = (Page || { request: {}}).request || {};
        context.errorContext.url = window.location.href;
        context.errorContext.userAgent = navigator.userAgent;
        try {
            context.eventName = `$err`;
        } catch(e) {
            context.eventName = `Unknown Error`;
        }
        CustomAnalytics.collector.collect(
          {
            eventName: context.eventName,
            eventAction: context.eventAction,
            message: `${JSON.stringify(context.errorContext)}`
          }
        );
      }
};