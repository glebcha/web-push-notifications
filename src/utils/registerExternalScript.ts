export const registerExternalScript = (url: string, onLoad?: (event?: Event) => void) => {
    const script = document.createElement('script');
    const firstScript = document.getElementsByTagName('script')[0];
    
    script.type = 'text/javascript';
    script.src = url;

    if (onLoad) {
        script.onload = onLoad;
    }

    if(firstScript && firstScript.parentNode) {
        firstScript.parentNode.appendChild(script);
    } else {
        document.body.appendChild(script);
    }
};
