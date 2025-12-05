import React, { useEffect } from "react";

const Wrapper = (Story: any) => {
    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }, []);

    useEffect(() => {
        const handler = (event: SubmitEvent) => {
            event.stopPropagation();
            event.preventDefault();

            alert("Form submitted!");
        };

        window.addEventListener("submit", handler);

        return () => {
            window.removeEventListener("submit", handler);
        };
    }, []);

    useEffect(() => {
        const handler = (event: MouseEvent) => {
            // Traverse up the DOM tree to find if we clicked on or inside an <a> element
            let target = event.target as Element;

            while (target && target !== document.body) {
                if (target.tagName === "A") {
                    console.log("Link click prevented:", target.getAttribute("href"));
                    event.preventDefault();
                    return;
                }
                target = target.parentElement as Element;
            }
        };

        // Use capture phase to intercept clicks before React components handle them
        document.addEventListener("click", handler, true);

        return () => {
            document.removeEventListener("click", handler, true);
        };
    }, []);

    return (
        <div
            style={{
                // @ts-ignore
                "--font-inter": "'Inter', sans-serif",
            }}
        >
            <Story />
        </div>
    );
};

export default Wrapper;