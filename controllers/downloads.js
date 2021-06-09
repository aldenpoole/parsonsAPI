export const getData = (req, res) => {
let path = '//Users//gw//Desktop//REPO//parsonsAPI//downloads//test.zip'

    res.download(path)
}
