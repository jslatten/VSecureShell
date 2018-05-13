# eSecureShell
Modified version of the secure-shell extension for Chromebooks.

Forked from the awesome work of Venryx at https://github.com/Venryx/VSecureShell to enable automatically opening Crouton chroot upon clicking a button.

I've taken it a different direction to enable creating custom shortcuts that will allow executing specific commands when the Crosh window opens. This is a hacky solution to be able to create a desktop icon for a Linux environment.

My goal is to produce a similar experience as the new ChromeOS Linux Crostini terminal only available on the Pixelbook. Although different in that you still need to configure Crouton chroot environment. Perhaps, users will also find other uses for these modifications.

Requirements:

1. Crouton (https://github.com/dnschneid/crouton)
2. Xiwi target along wth your choice of desktop environment. Example: sh sudo ~/Downloads/crouton -t xiwi,gnome-desktop -r xenial
3. Crouton integration extension installed. (https://chrome.google.com/webstore/detail/crouton-integration/gcpneefbbnfalgjniomfjknbcgkbijom)
4. eSecureShell extension.

Once you have installed and configured your environment install this extension. Quick step by step:

1. Clone this repository or download the zip archive and unpack.
2. Go to extensions (chrome://extensions)
3. Click "Load unpacked extension" button.
4. Select the repository folder.
5. Click open.

Using eSecureShell:

To execute a shell command automatically use the following syntax:

chrome-extension://pnhechapfaindjhompbnflcldabbghjo/html/crosh.html?exec=sudo enter-chroot xiwi gnome-terminal

This will execute the shell command in the crosh terminal first. Next it will enter your crouton chroot, and then execute gnome-terminal which will open in a xiwi window.

Additional Configuration:

Toolbar to enable options for running top as well as additional chroots. Additional commands can be added to the toolbar by adding

{name: "Button Title", command: "command_to_run"}

Default configuration:

let chromebookID = 0;

window.config = {
    /*activateSudo: true,
    sudoPassword: "\\",*/
    chrootCommands: true,
    commands: [
      {name: "Top", command: "top"}, {name: "Free Memory", command: "free -m"}
    ],
};