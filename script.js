document.getElementById("searchBtn").addEventListener("click", function () {
  let course = document.getElementById("courseInput").value.toLowerCase();

  fetch("roadmaps.json")
    .then((response) => response.json())
    .then((data) => {
      if (data[course]) {
        displayRoadmap(data[course], course);
      } else {
        document.getElementById(
          "output"
        ).innerHTML = `<p style="color:red;">❌ Course not found! Try 'Python' or 'Web Development'.</p>`;
      }
    })
    .catch((error) => {
      console.error("Error loading data:", error);
      document.getElementById("output").innerHTML =
        "<p style='color:red;'>Error loading roadmap data.</p>";
    });
});

function displayRoadmap(courseData, courseName) {
  let roadmapHTML = `<h2>${courseName.toUpperCase()} Roadmap</h2><ol>`;
  courseData.roadmap.forEach((step) => {
    roadmapHTML += `<li>${step}</li>`;
  });
  roadmapHTML += "</ol><h2>Resources</h2><ul>";
  courseData.resources.forEach((resource) => {
    roadmapHTML += `<li><a href="${resource.link}" target="_blank">${resource.title}</a></li>`;
  });
  roadmapHTML += "</ul>";
  document.getElementById("output").innerHTML = roadmapHTML;
}
