OV.RegisterHeaderPlugin ({
    registerButtons : (pluginInterface) => {
        pluginInterface.createHeaderButton ('info', 'User manual', 'info/index.html');
        pluginInterface.createHeaderButton ('donate', 'Support the development', 'https://github.com/sponsors/kovacsv');
        pluginInterface.createHeaderButton ('feedback', 'Send feedback', 'https://docs.google.com/forms/d/e/1FAIpQLSc0KhKcC0tEl9Y8M5U7tgaMZyd1YKG1PbZZj4f_Sr0_26Ot3A/viewform?usp=sf_link');
        pluginInterface.createHeaderButton ('twitter', 'Follow on Twitter', 'https://twitter.com/Online3DViewer');
        pluginInterface.createHeaderButton ('github', 'View on GitHub', 'https://github.com/kovacsv/Online3DViewer');
    }
});
