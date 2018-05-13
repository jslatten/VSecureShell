let chromebookID = 0;

window.config = {
    /*activateSudo: true,
    sudoPassword: "\\",*/
    chrootCommands: true,
    commands: [
      {name: "Top", command: "top"}, {name: "Free Memory", command: "free -m"},
    ],
};