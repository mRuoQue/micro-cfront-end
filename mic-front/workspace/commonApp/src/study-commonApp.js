let commonContainer = null

export async function bootstrap() {
  console.log("---------应用正在启动-----------")
}
export async function mount() {
  console.log("----------应用正在挂载----------")
  commonContainer = document.createElement("div")
  commonContainer.id = "commonContainer"
  commonContainer.innerHTML = "Hello commonContainer"
  document.body.appendChild(commonContainer)
}
export async function unmount() {
  console.log("-----------应用正在卸载-----------")
  document.body.removeChild(commonContainer)
}
