
// -------------------------------------------------------
//              JavaScript for the PDF button
// -------------------------------------------------------

function openPdf() {
  window.open('../docs/PandoraSpeech.pdf', '_blank');
}

document.getElementById('pdfButton').addEventListener('click', function () {
                                                              // First popup: ask if they want to continue
  const wantsToContinue = confirm(
    'This will open the PDF in a new window. \nDo you want to continue?'
  );

  if (wantsToContinue) {
    openPdf();                // Open the PDF
    return;
  }

                                                              // Second popup: they said no, so double-check
  const sureToCancel = confirm(
    "Are you sure you don't want to open the PDF? \n(Click 'OK' to open the PDF)"
  );

  if (sureToCancel) {
    openPdf();                // They changed their mind - open the PDF
  }
});




// Trial Section Dropdown Function

//function myFunction() {
//  document.getElementById("myDropdown").classList.toggle("show");
//}

// Close the dropdown if the user clicks outside of it
//window.onclick = function(event) {
//  if (!event.target.matches('.dropbtn')) {
//    var dropdowns = document.getElementsByClassName("dropdown-content");
//    for (var i = 0; i < dropdowns.length; i++) {
//      var openDropdown = dropdowns[i];
//      if (openDropdown.classList.contains('show')) {
//        openDropdown.classList.remove('show');
//      }
//    }
//  }
//};
// End of Trial Section Dropdown Function


