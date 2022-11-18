<?php 

session_start();
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "login_db";

if(!$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname))
{

	die("failed to connect!");
}
function check_login($con)
{

	if(isset($_SESSION['user_id']))
	{

		$id = $_SESSION['user_id'];
		$query = "select * from users where user_id = '$id' limit 1";

		$result = mysqli_query($con,$query);
		if($result && mysqli_num_rows($result) > 0)
		{

			$user_data = mysqli_fetch_assoc($result);
			return $user_data;
		}
	}

	//redirect to login
	header("Location: login.php");
	die;

}

function random_num($length)
{

	$text = "";
	if($length < 5)
	{
		$length = 5;
	}

	$len = rand(4,$length);

	for ($i=0; $i < $len; $i++) { 
		# code...

		$text .= rand(0,9);
	}

	return $text;
}
if($_SERVER['REQUEST_METHOD'] == "GET")
	{
        $email = $_GET['email'];
		$epassword = $_GET['epassword'];
        $name=$_GET['name'];
        $course=$_GET['course'];
        $branch=$_GET['branch'];
        $rollno=$_GET['rollno'];
        $gender=$_GET['gender'];
        $dob=$_GET['dob'];
        $age=$_GET['age'];
        $contact=$_GET['contact'];
        $cpassword=$_GET['cpassword'];

        $sql = "SELECT * FROM users WHERE email='{$_SESSION["email"]}'";
            $result = mysqli_query($conn, $sql);

            if (mysqli_num_rows($result) > 0) {
                while ($row = mysqli_fetch_assoc($result)) {
					echo "Name: ,$name" ;
					echo "Name: ,$course" ;
					echo "Name: ,$branch" ;
					echo "Name: ,$rollno" ;
					echo "Name: ,$gender" ;
					echo "Name: ,$dob" ;
					echo "Name: ,$age" ;
					echo "Name: ,$contact" ;
					echo "Name: ,$email" ;
					echo "Name: ,$epassword" ;
				}
			}		
		}
