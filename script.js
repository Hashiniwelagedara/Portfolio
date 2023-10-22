function doPost(e) {
  try {
    var sheet = SpreadsheetApp.openById(
      "AKfycbwZKkNCRqqbQAgTbKPS8q30VdkGRNrM8Ihr7ZxpPyXEiRa0YJp4fJ0IYENnEEEx0PuB"
    ).getSheetByName("Portfolio-contact form");
    var data = JSON.parse(e.postData.contents);

    var name = data.Name;
    var email = data.Email;
    var message = data.Message;

    sheet.appendRow([name, email, message]);

    return ContentService.createTextOutput("Success").setMimeType(
      ContentService.MimeType.TEXT
    );
  } catch (error) {
    return ContentService.createTextOutput("Error: " + error).setMimeType(
      ContentService.MimeType.TEXT
    );
  }
}
