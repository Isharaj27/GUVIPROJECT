function registration()
	{

		var name= document.getElementById("name").value;
        var course= document.getElementById("course").value;
        var branch= document.getElementById("branch").value;
        var rollno= document.getElementById("rollno").value;
        var age= document.getElementById("age").value;
        var dob= document.getElementById("dob").value;
        var contact= document.getElementById("contact").value;
		var email= document.getElementById("email").value;
		var pwd= document.getElementById("epassword").value;			
		var cpwd= document.getElementById("cpassword").value;
		
        //email id expression code
		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
		var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
		if(name.value=="")
		{
			alert("please enter name");
			return false;
		}
		else if(!letters.test(name))
		{
			alert("Name field required only alphabet characters");
			return false;
		}
		else if(email=='')
		{
			alert('Please enter your user email id');
			return false;
			
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
			return false;
		}
		else if(contact=='')
		{
			alert('Please enter the mobile number.');
			return false;
		}
		else if(!re.test(contact))
		{
			alert('contact field required only numbers');
			return false;
		}
        else if(course.value=="none")
		{
			alert('please select any  course');
			return false;
		}
		else if(branch.value=='')
		{
			alert('please enter branch name');
			return false;
		}
		else if ( ( gender[0].checked == false ) && ( gender[1].checked == false ) )
        {
            alert( "Please choose your Gender: Male or Female" );
			return false;
        }
		else if (dob == null || dob == "" || !pattern.test(dob)) {
			alert("Invalid date of birth\n");
			return false;
			
		}
		if (isNaN(age)||age<1||age>100)
        { 
            alert("The age must be a number between 1 and 100");
			return false;
        }
		else if(pwd=='')
		{
			alert('Please enter Password');
			return false;
		}
		else if(cpwd=='')
		{
			alert('Enter Confirm Password');
			return false;
		}
		else if(!pwd_expression.test(pwd))
		{
			alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
			return false;
		}
		else if(pwd != cpwd)
		{
			alert('Password not Matched');
			return false;
			
		}
		else if(document.getElementById("pwd").value.length < 6)
		{
			alert('Password minimum length is 6');
			return false;
			
		}
		else if(document.getElementById("pwd").value.length > 12)
		{
			alert('Password max length is 12');
			return false;
			
		}
		else
		{				                            
               alert('Thank You for Login & You are Redirecting to Campuslife Website');
			   // Redirecting to other page or webste code. 
			   document.location = "login.html"; 
		}
	}
	function clearFunc()
	{
		document.getElementById("name").value="";
        document.getElementById("course").value="";
        document.getElementById("branch").value="";
        document.getElementById("rollno").value="";
        document.getElementById("age").value="";
        document.getElementById("dob").value="";
        document.getElementById("contact").value="";
		document.getElementById("email").value="";
		document.getElementById("epassword").value="";			
		document.getElementById("cpassword").value="";
		
	}
