let chromebookID = 0;
let activate_toolbar = false;

window.config = {
    /*activateSudo: true,
    sudoPassword: "\\",*/
    chrootCommands: false,
    if (activate_toolbar == true) {
      commands: [
        {name: "Start Terminal", command: "sudo enter-chroot xiwi terminator"},
      ],
    };
};
