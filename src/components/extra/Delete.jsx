const handleDelete = () => {
    fetch("https://mtm-final-proj.web.app/goals", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
    console.log("Deleted Goal");
  };

  export default handleDelete