<?php
if (isset($_GET['mail'])) {
    file_put_contents('liste.txt', $_GET['mail'] . "\n", FILE_APPEND+LOCK_EX);
}
