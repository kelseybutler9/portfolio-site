$(`.nav-header`).click(function() {
  let sectionOptions = ['aboutme', 'projects', 'contactinfo'];
  let sectionName = $(this).find('a').attr('href');

  sectionOptions.forEach(item => {
    $(`#${item}`).prop("hidden", true);
    $(`#${item}-nav`).removeClass('selected');
  });

  $(`${sectionName}`).prop("hidden", false);
  $(`${sectionName}-nav`).addClass('selected');
});
