# 鲁虺在线三维模型文件浏览器

http://3dviewers.luhui.net

# Deploy status badge 部署状态标识
This image automatically updates to reflect the current state of your latest production deploy. 此映像会自动更新以反映最新生产部署的当前状态。

[![Netlify Status](https://api.netlify.com/api/v1/badges/0d587b4a-0272-4111-bbf8-42002b88cef1/deploy-status)](https://app.netlify.com/sites/3dviewers/deploys)

http://3dviewers.netlify.com

http://3dviewers.netlify.app


# luhui Online 3D Viewer

[![Build status](https://ci.appveyor.com/api/projects/status/exypq43a8kjby5n0?svg=true)](https://ci.appveyor.com/project/kovacsv/online3dviewer)
[![Build status](https://github.com/kovacsv/Online3DViewer/actions/workflows/build.yml/badge.svg)](https://github.com/kovacsv/Online3DViewer/actions/workflows/build.yml)
[![DeepScan grade](https://deepscan.io/api/teams/16586/projects/19893/branches/524595/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=16586&pid=19893&bid=524595)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/kovacsv/Online3DViewer.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/kovacsv/Online3DViewer/context:javascript)

Online 3D Viewer (https://3dviewer.net) is a free and open source web solution to visualize and explore 3D models right in your browser. This repository contains the source code of the website and the library behind it.

## Example

![Start Page](assets/images/3dviewer_net_start_page.png?raw=true)

[Check the live version!](https://3dviewer.net/#model=https://raw.githubusercontent.com/kovacsv/Online3DViewer/dev/test/testfiles/gltf/DamagedHelmet/glTF-Binary/DamagedHelmet.glb)

## Documentation

The repository is separated into two parts. See more information in the [Developer Documentation](https://github.com/kovacsv/Online3DViewer/wiki).

* **Online 3D Viewer Website**: Source code of the web solution with all of the pages and functions.
* **Online 3D Viewer Engine**: Source code of the library to visualize models easily.

## Supported file formats

* **Import**: obj, 3ds, stl, ply, gltf, off, 3dm, fbx, dae, wrl, 3mf, stp, ifc.
* **Export**: obj, stl, ply, gltf, off, 3dm.

## Features

- Import model:
  - Select files from a file browser dialog.
  - Drag and drop files from your computer.
  - Specify files by web url.
  - Specify files by web url in hash parameters.
- Explore model:
  - Orbit, pan, zoom.
  - Set up direction.
  - Fit to window.
- Investigate model:
  - List used and missing files.
  - List all materials and meshes.
  - Show/hide and zoom to a specific mesh.
  - List materials used by a specific mesh.
  - Show model information (model size, vertex and polygon count).
  - Show custom properties stored in the model.
- Export model to various format.
- Embed viewer in your website.

## External Libraries

Online 3D Viewer uses these wonderful libraries: [three.js](https://github.com/mrdoob/three.js), [pickr](https://github.com/Simonwep/pickr), [fflate](https://github.com/101arrowz/fflate), [draco](https://github.com/google/draco), [rhino3dm](https://github.com/mcneel/rhino3dm), [web-ifc](https://github.com/tomvandig/web-ifc), [occt-import-js](https://github.com/kovacsv/occt-import-js).
