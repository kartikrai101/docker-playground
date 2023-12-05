exports.getNameController = async (req, res) => {
    res.send("The name is Kartik!")
}

exports.postNameController = (req, res) => {
    res.send("Saved the name!")
}

exports.deleteNameController = (req, res) => {
    res.send("Deleted the name!")
}