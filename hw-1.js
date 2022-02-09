const folders = [
  {
    id: 5,
    name: 'Klasör 1',
    files: [
      { id: 17, name: 'profil.jpg' },
      { id: 18, name: 'manzara.jpg'},
    ],
  },
  {
    id: 6,
    name: 'Klasör 2',
    files: [
      { id: 21, name: 'foto.png' },
      { id: 22, name: 'dosya.xls' },
    ],
  },
  {
    id: 7,
    name: 'Klasör 3',
  },
]



function move(fileId,folderId){
  if(typeof fileId === "string" || typeof folderId === "string"){
    //check paramaters of number
    console.log("Parameters are not strings, please change the parameters to numbers!!!");

  }else{
    //file and folder 
    const fileNum = folders.find((x) => x.files !== undefined && x.files.find((y) => y.id === fileId))
    const folderNum = folders.find(x => x.id === folderId)

  if(fileNum !== undefined && folderNum !== undefined){
    //file index number
    const indexNum = fileNum.files.findIndex(x => x.id === fileId)

    if(folderNum.files !== undefined){
      //check folder has same file id 
      if(folderNum.files.some(x => x.id === fileId )){

        return console.log("The file you are trying to add already exists here");

      }else{
        //folder has files array add target file item
        folderNum.files.push(fileNum.files[indexNum])

      }

    }else{
      //folder has not files array create and add target file item
      folderNum.files = [];
      folderNum.files.push(fileNum.files[indexNum])

    }
    //delete first file location
    fileNum.files.splice(indexNum,1);

    return console.log("Added Successfully");

  }else{
    //check if fileNum and folderNum are in the folders array
    if(fileNum === undefined && folderNum === undefined){

      console.log("File and Folder id not found");

    }else if( folderNum === undefined){

      console.log("Folder id not found");

    }else{

      console.log("File id not found");
    }
  }
  }
}


move(17,7) // dosyayı klasöre taşıyacak
// copy(18,7) // kopyasını oluşturacak
// remove(17) // dosyayı silecek
// removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
// parentFolderOf(17) // ==> 5