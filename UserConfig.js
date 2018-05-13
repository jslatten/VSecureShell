let chromebookID = 0;
let activate_toolbar = true;

window.config = {
    /*activateSudo: true,
    sudoPassword: "\\",*/
    chrootCommands: true,
    if (activate_toolbar == true) {
      commands: [
        {name: "Open Chroot", command: "sudo enter-chroot"},
      ],
    };
};