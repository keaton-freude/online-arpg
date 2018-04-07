import { Engine, FreeCamera, Mesh, Scene, Vector3 } from "babylonjs";
import "../config/environment";
import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  const canvas = <HTMLCanvasElement>document.getElementById("game-canvas");
  const engine = new Engine(canvas, true);
  const scene = new Scene(engine);

  var camera = new BABYLON.FreeCamera(
    "camera1",
    new BABYLON.Vector3(0, 5, -10),
    scene
  );
  camera.setTarget(BABYLON.Vector3.Zero());
  camera.attachControl(canvas, true);
  var light = new BABYLON.HemisphericLight(
    "light1",
    new BABYLON.Vector3(0, 1, 0),
    scene
  );
  light.intensity = 0.7;
  var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
  sphere.position.y = 1;
  Mesh.CreateGround("ground1", 500, 500, 2, scene);
  engine.runRenderLoop(() => scene.render());
});
