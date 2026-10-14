
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
      openPdf();                // Yes -> open the window
      return;
    }

    // Second popup: they said no, so double-check
    const sureToCancel = confirm(
      "Are you sure you don't want to open the PDF? \n(Click 'OK' to cancel, or 'Cancel' to open the PDF)"
    );

    if (!sureToCancel) {
      openPdf();                // No (they changed their mind) -> open the window
    }
    // Yes (sure) -> do nothing, which ends the flow
  });


  