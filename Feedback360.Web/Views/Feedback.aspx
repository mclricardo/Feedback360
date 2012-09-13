<%@ Page Language="C#" AutoEventWireup="true" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="../Scripts/jquery-1.7.2.min.js" type="text/javascript"></script>
    <script src="../Scripts/underscore.min.js" type="text/javascript"></script>
    <script src="../Scripts/backbone.min.js" type="text/javascript"></script>
    <script src="../Scripts/backbone.modelbinding.js" type="text/javascript"></script>
    <script src="../Scripts/feedback.js" type="text/javascript"></script>
    <link href="../Styles/feedback.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <div class="central-panel">
        <div class="title">
            <img src="../Images/Logo.png" />
        </div>
        <div class="panel">
            <form id="edit-form">
                first name:
                <input id="first_name" type="text"><br />
                last name:
                <input id="last_name" type="text"><br />
            </form>
            <br />

            <div id="participants-grid" class="participants-grid">
                <div><span data-bind="text name"></span><span data-bind="text artist"></span></div>
            </div>
            <br />

            <div id="display" class="panel">
                You Entered <span data-bind="text first_name"></span><span data-bind="text last_name">
                </span>
                <br />
                <input type="button" class="button" id="reset-button" value="Reset The Form"></button>
            </div>
        </div>
    </div>    ​
</body>
</html>
