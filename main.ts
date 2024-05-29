namespace SpriteKind {
    export const Cam = SpriteKind.create()
}
function InventoryCreation () {
    WeaponsArmorInventory = Inventory.create_inventory([], 16)
    WeaponsArmorInventory.set_color(InventoryColorAttribute.InventoryOutline, 15)
    WeaponsArmorInventory.set_color(InventoryColorAttribute.InventorySelectedOutline, 1)
    WeaponsArmorInventory.set_color(InventoryColorAttribute.InventoryBackground, 14)
    WeaponsArmorInventory.set_color(InventoryColorAttribute.InventoryText, 1)
    WeaponsArmorInventory.setFlag(SpriteFlag.RelativeToCamera, true)
    WeaponsArmorInventory.setFlag(SpriteFlag.Invisible, true)
    WeaponsArmorInventory.setPosition(80, 50)
    ConsumablesInventory = Inventory.create_inventory([], 16)
    ConsumablesInventory.z = 100
    ConsumablesInventory.set_color(InventoryColorAttribute.InventoryOutline, 15)
    ConsumablesInventory.set_color(InventoryColorAttribute.InventorySelectedOutline, 1)
    ConsumablesInventory.set_color(InventoryColorAttribute.InventoryBackground, 14)
    ConsumablesInventory.set_color(InventoryColorAttribute.InventoryText, 1)
    ConsumablesInventory.set_text("")
    ConsumablesInventory.setFlag(SpriteFlag.RelativeToCamera, true)
    ConsumablesInventory.setFlag(SpriteFlag.Invisible, true)
    ConsumablesInventory.setPosition(80, 50)
    ChoicesInFight = Inventory.create_toolbar([
    Inventory.create_item("Attack", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f f f . 
        . . . . . . . . . . . f d d f . 
        . . . . . . . . . . f d b b f . 
        . . . . . . . . . f d b b f . . 
        . . . . . . . . f d b b f . . . 
        . . . . . . . f d b b f . . . . 
        . . . f f . f d b b f . . . . . 
        . . . f c f d b b f . . . . . . 
        . . . . f c f b f . . . . . . . 
        . . . . f c c f . . . . . . . . 
        . . . f c f f c f . . . . . . . 
        . f f c f . . f f . . . . . . . 
        . f c f . . . . . . . . . . . . 
        . f f f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("Items", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f f f . . . 
        . . . . . . . f f e e e f f . . 
        . . . . . . . . f e e e e f . . 
        . . . . . . f f f 5 e e f f . . 
        . . . . f f e e 5 5 5 f f . . . 
        . . f f f e e e e e 5 f f . . . 
        . . f e e e e e e e e e f f . . 
        . f f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e f . . 
        . f f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f f e e e e e e e e f f . . 
        . . . f f f e e e e e f f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("Specials", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . b d d b . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . . . c 5 5 c . . . . . . 
        . . . . . c d 5 5 d c . . . . . 
        . . b c c d 5 5 5 5 d c c b . . 
        . b d d 5 5 5 5 5 5 5 5 d d b . 
        . b d d 5 5 5 5 5 5 5 5 d d b . 
        . . b c c d 5 5 5 5 d c c b . . 
        . . . . . c d 5 5 d c . . . . . 
        . . . . . . c 5 5 c . . . . . . 
        . . . . . . c d d c . . . . . . 
        . . . . . . b d d b . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("Run Away", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . f f f f f . . . . f f f f 
        . . f f f . . f f . f f . . . . 
        . . f f . . . f f f f f . . . . 
        . . f f . . . . f f f . . . . . 
        . . f f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    ], 4)
    ChoicesInFight.set_color(ToolbarColorAttribute.BoxOutline, 15)
    ChoicesInFight.set_color(ToolbarColorAttribute.BoxBackground, 14)
    ChoicesInFight.set_color(ToolbarColorAttribute.BoxSelectedOutline, 1)
    ChoicesInFight.setFlag(SpriteFlag.RelativeToCamera, true)
    ChoicesInFight.setPosition(80, 105)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (SelectedAction.get_text(ItemTextAttribute.Name) == "Attack") {
        if (Math.percentChance(CritChance)) {
            EnemyHP.value += -1 * (Damage * CritDamage)
            scene.cameraShake(2, 500)
            ActionDisplayer.setText("CRIT! Dealt " + Damage * CritDamage + " dmg")
        } else {
            EnemyHP.value += -1 * Damage
            ActionDisplayer.setText("Dealt " + Damage + " dmg")
        }
    } else if (SelectedAction.get_text(ItemTextAttribute.Name) == "Items") {
        if (comsumableinventoryinvisible) {
            ConsumablesInventory.setFlag(SpriteFlag.Invisible, false)
            comsumableinventoryinvisible = false
        } else {
            ConsumablesInventory.setFlag(SpriteFlag.Invisible, true)
            comsumableinventoryinvisible = true
        }
    } else if (SelectedAction.get_text(ItemTextAttribute.Name) == "Specials") {
    	
    } else if (SelectedAction.get_text(ItemTextAttribute.Name) == "Run Away") {
        if (Math.percentChance(FleeChance)) {
            game.gameOver(true)
        } else {
            ActionDisplayer.setText("Player couldn't run away")
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (comsumableinventoryinvisible && PlayersTurn) {
        ChoicesInFight.change_number(ToolbarNumberAttribute.SelectedIndex, -1)
    }
})
function PlayerCreation () {
    mySprite = sprites.create(img`
        . . . . . . . . f f f f f . . . 
        . . . . . . . f f 7 7 7 f f . . 
        . . . . f f f f f 7 7 7 7 f . . 
        . . . f 7 7 7 7 7 7 7 7 f f . . 
        . . f 6 7 7 7 7 7 7 7 6 f . . . 
        . . f 6 7 7 6 6 6 6 6 f f . . . 
        . . f f 6 6 f c c f c f . . . . 
        . . . f f c e e e e e f . . . . 
        . . . . f c e f f e e f . . . . 
        . . . . f c e e e e e f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f c f e e e e f c f . . . 
        . . . f f f e e e e f f f . . . 
        . . . . . f c f f c f . . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Player)
    cam = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Cam)
    scene.cameraFollowSprite(cam)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (comsumableinventoryinvisible && PlayersTurn) {
        ChoicesInFight.change_number(ToolbarNumberAttribute.SelectedIndex, 1)
    }
})
function HUD () {
    ActionDisplayer = textsprite.create("")
    ActionDisplayer.setFlag(SpriteFlag.RelativeToCamera, true)
    ActionDisplayer.setPosition(8, 7)
    ActionDisplayer.setBorder(1, 14)
    ActionDisplayer.setOutline(1, 15)
    textSprite = textsprite.create("")
    textSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    textSprite.setOutline(1, 15)
    textSprite.setPosition(40, 88)
    HP = statusbars.create(20, 4, StatusBarKind.Health)
    HP.setBarBorder(1, 15)
    HP.max = 10
    HP.value = 10
    HP.attachToSprite(mySprite, 2, 0)
}
function Stats () {
    PlayerLevel = 1
    Damage = 2
    CritChance = 5
    CritDamage = 1.5
    FleeChance = 20
    Defense = 0
}
function LevelCreation () {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
    tiles.placeOnRandomTile(cam, assets.tile`myTile`)
    for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {
        EnemyTypes = [sprites.create(img`
            . . . f f f f f . . . . . . . . 
            . . f f 4 4 4 f f . . . . . . . 
            . . f 4 4 4 4 f f f f f . . . . 
            . . f f 4 4 4 4 4 4 4 4 f . . . 
            . . . f 2 4 4 4 4 4 4 4 2 f . . 
            . . . f f 2 2 2 2 2 4 4 2 f . . 
            . . . . f c c c c c 2 2 f f . . 
            . . . . f c 1 c c 1 c f f . . . 
            . . . . f c c c c c c f . . . . 
            . . . . f c c c c c c f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 c c c c 2 f . . . . 
            . . . f 4 f c c c c f 4 f . . . 
            . . . f f f c c c c f f f . . . 
            . . . . . f c f f c f . . . . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.Enemy), sprites.create(img`
            . . . f f f f f . . . . . . . . 
            . . f f 9 9 9 f f . . . . . . . 
            . . f 9 9 9 9 f f f f f . . . . 
            . . f f 9 9 9 9 9 9 9 9 f . . . 
            . . . f 8 9 9 9 9 9 9 9 8 f . . 
            . . . f f 8 8 8 8 8 9 9 8 f . . 
            . . . . f a a a a a 8 8 f f . . 
            . . . . f a 1 a a 1 a f f . . . 
            . . . . f a a a a a a f . . . . 
            . . . . f a a a a a a f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 9 a a a a 9 f . . . . 
            . . . f 8 f a a a a f 8 f . . . 
            . . . f f f a a a a f f f . . . 
            . . . . . f a f f a f . . . . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.Enemy)]
        EnemyGuy = EnemyTypes._pickRandom()
        tiles.placeOnRandomTile(EnemyGuy, sprites.castle.tileDarkGrass2)
        EnemyHP = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        EnemyHP.setBarBorder(1, 15)
        EnemyHP.max = 10
        EnemyHP.value = 10
        EnemyHP.attachToSprite(EnemyGuy)
        tiles.setTileAt(value, sprites.castle.tileDarkGrass3)
    }
}
function Variables () {
    Stats()
    CurrentEnemysInFight = AmountsOfEnemys + 1
    PlayersTurn = true
    comsumableinventoryinvisible = true
    AmountsOfEnemys = randint(0, 2)
    Level = 0
}
let item: Inventory.Item = null
let Level = 0
let AmountsOfEnemys = 0
let CurrentEnemysInFight = 0
let EnemyGuy: Sprite = null
let EnemyTypes: Sprite[] = []
let Defense = 0
let PlayerLevel = 0
let HP: StatusBarSprite = null
let textSprite: TextSprite = null
let cam: Sprite = null
let mySprite: Sprite = null
let PlayersTurn = false
let FleeChance = 0
let comsumableinventoryinvisible = false
let ActionDisplayer: TextSprite = null
let CritDamage = 0
let Damage = 0
let EnemyHP: StatusBarSprite = null
let CritChance = 0
let SelectedAction: Inventory.Item = null
let ChoicesInFight: Inventory.Toolbar = null
let ConsumablesInventory: Inventory.Inventory = null
let WeaponsArmorInventory: Inventory.Inventory = null
PlayerCreation()
Variables()
HUD()
InventoryCreation()
LevelCreation()
game.onUpdate(function () {
    if (ChoicesInFight.get_number(ToolbarNumberAttribute.SelectedIndex) == 4) {
        ChoicesInFight.set_number(ToolbarNumberAttribute.SelectedIndex, 0)
    }
    if (ChoicesInFight.get_number(ToolbarNumberAttribute.SelectedIndex) == -1) {
        ChoicesInFight.set_number(ToolbarNumberAttribute.SelectedIndex, 3)
    }
})
game.onUpdate(function () {
    SelectedAction = ChoicesInFight.get_items()[ChoicesInFight.get_number(ToolbarNumberAttribute.SelectedIndex)]
    if (ChoicesInFight.get_items()[ChoicesInFight.get_number(ToolbarNumberAttribute.SelectedIndex)]) {
        item = ChoicesInFight.get_items()[ChoicesInFight.get_number(ToolbarNumberAttribute.SelectedIndex)]
        textSprite.setText(item.get_text(ItemTextAttribute.Name))
    }
})
game.onUpdate(function () {
	
})
