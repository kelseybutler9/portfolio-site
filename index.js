$(`li`).click(function() {
  let sectionOptions = ['#home', '#aboutme', '#projects', '#contactinfo'];
  let sectionName = $(this).find('a').attr('href');
  sectionOptions.forEach(item => {
    $(`${item}`).prop("hidden", true);
  });

  $(`${sectionName}`).prop("hidden", false);
});
