page('/', mainPage);
page('/about', about);
page('/projects', projects);
page('/contact', contact);

function mainPage() {
  mainPageController.reveal();
};

function about() {
  aboutController.reveal();
};

function projects() {
  projectController.reveal();
};

function contact() {
  contactController.reveal();
};

page();
