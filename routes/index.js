var express = require('express'),
    router = express.Router(),
    formidable = require('formidable'),
    fs = require('fs'),
    TITLE = 'formidable上传示例',
    AVATAR_UPLOAD_FOLDER = 'avatar';


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title:TITLE});
});


router.post('/', function(req, res, next) {
    var form = new formidable.IncomingForm();//创建上传表单
        form.encoding = 'utf-8';
        form.uploadDir = 'public' + AVATAR_UPLOAD_FOLDER;
        form.keepExtensions = true;
        form.maxFieldsSize = 2*1024*1024;

        form.parse(req,function(err,fields,files){
            if(err){
                res.locals.error = err;
                res.render('index',{title:TITLE});
                return;
            }

            var exeName = '';
            switch(files.fulAvatar.type){   
                case 'image/pjpeg':
                    extName = 'jpg';
                    break;  
                case 'image/jpeg':
                    extName = 'jpg';
                    break;  
                case 'image/png':
                    extName = 'png';
                    break;  
                case 'image/x-png':
                    extName = 'png';
                    break;
            }

            if(extName.length == 0){
                res.locals.error = '只支持png和jpg格式图片';
                res.render('index',{title:TITLE});
                return;
            }

            var avatarName = Math.random() + '.' + extName;
            var newPath = form.uploadDir + avatarName;

            console.log(newPath);
            fs.renameSync(files.fulAvatar.path, newPath);  //重命名
        });
    res.locals.success = '上传成功';
    res.render('index', { title:TITLE});
});

module.exports = router;
