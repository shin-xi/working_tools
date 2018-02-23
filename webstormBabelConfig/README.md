# 引用：https://www.jianshu.com/p/149cabc1216a
# 文件旁直接生成sourcemap和编译文件

Arguments 默认为： 
$FilePathRelativeToProjectRoot$ --out-dir dist --source-maps --presets env

Output paths to refresh 默认为：
dist\$FileDirRelativeToProjectRoot$\$FileNameWithoutExtension$.js:dist\$FileDirRelativeToProjectRoot$\$FileNameWithoutExtension$.js.map

我的设置为：

Arguments:
$FilePathRelativeToProjectRoot$ --out-file $FileDir$\$FileNameWithoutExtension$-compile.js --source-maps --presets env

Output paths to refresh:
$FileDir$\$FileNameWithoutExtension$-compile.js:$FileDir$\$FileNameWithoutExtension$-compile.js.map