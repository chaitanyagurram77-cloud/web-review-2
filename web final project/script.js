
  /* ---------- LOGIN FUNCTION ---------- */
function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;
  const error = document.getElementById("error-message");

  if (email === "123@gmail.com" && password === "123" && role === "student") {
    window.location.href = "dashboard.html";
  } 
  else if (email === "123@gmail.com" && password === "123" && role === "admin") {
    window.location.href = "admin.html";
  } 
  else {
    error.innerText = "❌ Invalid login credentials";
  }

  return false;
}

/* ---------- PROJECT SUBMISSION ---------- */
function submitProject() {
  const title = document.getElementById("projTitle").value;
  const desc = document.getElementById("projDesc").value;

  if (title === "" || desc === "") {
    alert("Please fill all project details");
    return;
  }

  localStorage.setItem("projectTitle", title);
  localStorage.setItem("projectDesc", desc);

  alert("✅ Project submitted successfully!");
}

/* ---------- PEER FEEDBACK ---------- */
function submitFeedback() {
  const project = document.getElementById("project").value;
  const feedback = document.getElementById("feedback").value;
  const rating = document.getElementById("rating").value;

  if (project === "" || feedback === "" || rating === "") {
    alert("Please complete all fields");
    return;
  }

  localStorage.setItem("reviewProject", project);
  localStorage.setItem("reviewFeedback", feedback);
  localStorage.setItem("reviewRating", rating);

  alert("✅ Feedback submitted successfully!");
}

