$('#myTabContent a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $('#myTabContent a[href="#day1"]').tab('show') // Select tab by name
  $('#myTabContent a[href="#day2"]').tab('show') // Select tab by name
  $('#myTabContent a[href="#day3"]').tab('show') // Select tab by name
  
  // Uncomment this line to demonstrate expected behavior
//$('#inner-modal').on('click', '[data-dismiss="modal"]', function(e) { e.stopPropagation(); });
