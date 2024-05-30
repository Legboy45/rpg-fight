namespace SpriteKind {
    export const Cam = SpriteKind.create()
    export const Target = SpriteKind.create()
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
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Targeting == 1) {
        Targeting = 3
    } else {
        Targeting += -1
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PlayersTurn) {
        if (SelectedAction.get_text(ItemTextAttribute.Name) == "Attack") {
            if (PlayerTarget.overlapsWith(TargetedEnemy)) {
                PlayerTarget.setFlag(SpriteFlag.Invisible, false)
                if (Math.percentChance(CritChance)) {
                    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, TargetedEnemy).value += -1 * (Damage * CritDamage)
                    scene.cameraShake(2, 500)
                    ActionDisplayer.setText("CRIT! Dealt " + Damage * CritDamage + " dmg")
                } else {
                    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, TargetedEnemy).value += -1 * Damage
                    ActionDisplayer.setText("Dealt " + Damage + " dmg")
                }
                if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, TargetedEnemy).value <= 0) {
                    sprites.destroy(TargetedEnemy)
                    sprites.destroy(statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, TargetedEnemy))
                    CurrentEnemysInFight += -1
                }
                PlayersTurn = false
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
            PlayersTurn = false
        } else if (SelectedAction.get_text(ItemTextAttribute.Name) == "Run Away") {
            if (Math.percentChance(FleeChance)) {
                game.gameOver(true)
            } else {
                ActionDisplayer.setText("Player couldn't run away")
            }
            PlayersTurn = false
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
    animation.runImageAnimation(
    mySprite,
    [img`
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
        `,img`
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
        `,img`
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
        `,img`
        . . . . . . . . . . . . . . . . 
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
        . . . f f f c f f c f f f . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
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
        . . . f f f c f f c f f f . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
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
        . . . f f f c f f c f f f . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
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
        . . . f f f c f f c f f f . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
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
        `,img`
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
        `,img`
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
        `],
    300,
    true
    )
    PlayerTarget = sprites.create(img`
        1 1 1 1 1 . . . . . . 1 1 1 1 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 1 1 1 1 . . . . . . 1 1 1 1 1 
        `, SpriteKind.Target)
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
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Targeting == 3) {
        Targeting = 1
    } else {
        Targeting += 1
    }
})
function HUD () {
    ActionDisplayer = textsprite.create("")
    ActionDisplayer.setFlag(SpriteFlag.RelativeToCamera, true)
    ActionDisplayer.setPosition(8, 7)
    ActionDisplayer.setBorder(1, 14)
    ActionDisplayer.setOutline(1, 15)
    ActionName = textsprite.create("")
    ActionName.setFlag(SpriteFlag.RelativeToCamera, true)
    ActionName.setOutline(1, 15)
    ActionName.setPosition(40, 88)
    HP = statusbars.create(20, 4, StatusBarKind.Health)
    HP.setBarBorder(1, 15)
    HP.max = 15
    HP.value = 15
    HP.attachToSprite(mySprite, 2, 0)
}
function Stats () {
    Money = 0
    Targeting = 1
    PlayerLevel = 1
    Damage = 2
    CritChance = 5
    CritDamage = 1.5
    FleeChance = 20
    Defense = 0
}
sprites.onOverlap(SpriteKind.Target, SpriteKind.Enemy, function (sprite, otherSprite) {
    TargetedEnemy = otherSprite
})
function LevelCreation () {
    tiles.setCurrentTilemap(tilemap`level2`)
    grid.snap(PlayerTarget)
    grid.place(PlayerTarget, tiles.getTileLocation(11, 8))
    tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
    tiles.placeOnRandomTile(cam, assets.tile`myTile`)
    for (let index = 0; index <= AmountsOfEnemys; index++) {
        EnemyTypes = [
        sprites.create(img`
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
            `, SpriteKind.Enemy),
        sprites.create(img`
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
            `, SpriteKind.Enemy),
        sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f f 2 2 1 1 f f f . . . 
            . . f f 2 2 2 2 1 1 2 2 f . . . 
            . . f 2 1 1 2 2 2 2 2 2 f f . . 
            . . f 2 1 1 f f f f 2 1 1 f . . 
            . . f 2 f f f 2 2 f f 1 1 f . . 
            . . f f f 2 2 4 4 2 f f f f . . 
            . . . f 2 f f 4 4 f f 2 f . . . 
            . . . f 4 4 4 4 4 4 4 2 f . . . 
            . . . . f f f f f f f f . . . . 
            . . . f 4 4 4 4 4 4 4 2 f . . . 
            . . . f 4 4 4 4 4 4 4 2 f . . . 
            . . f f f f f f f f f f f f . . 
            `, SpriteKind.Enemy),
        sprites.create(img`
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
            `, SpriteKind.Player)
        ]
        EnemyGuy = EnemyTypes._pickRandom()
        tiles.placeOnRandomTile(EnemyGuy, sprites.castle.tileDarkGrass2)
        tiles.setTileAt(EnemyGuy.tilemapLocation(), sprites.castle.tileDarkGrass3)
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        EnemyHP = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        EnemyHP.setBarBorder(1, 15)
        EnemyHP.attachToSprite(value)
        if (EnemyHP.spriteAttachedTo() == EnemyTypes[0]) {
            statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, EnemyHP.spriteAttachedTo()).max = 5
            statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, EnemyHP.spriteAttachedTo()).value = 5
        } else if (EnemyHP.spriteAttachedTo() == EnemyTypes[1]) {
            statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, EnemyHP.spriteAttachedTo()).max = 4
            statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, EnemyHP.spriteAttachedTo()).value = 4
        } else if (EnemyHP.spriteAttachedTo() == EnemyTypes[2]) {
            statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, EnemyHP.spriteAttachedTo()).max = 7
            statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, EnemyHP.spriteAttachedTo()).value = 7
        } else {
            statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, EnemyHP.spriteAttachedTo()).max = 3
            statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, EnemyHP.spriteAttachedTo()).value = 3
        }
    }
}
function Variables () {
    Stats()
    InAFight = true
    AmountsOfEnemys = randint(1, 2)
    CurrentEnemysInFight = AmountsOfEnemys + 1
    PlayersTurn = true
    comsumableinventoryinvisible = true
    Level = 0
}
let item: Inventory.Item = null
let Level = 0
let InAFight = false
let EnemyHP: StatusBarSprite = null
let EnemyGuy: Sprite = null
let EnemyTypes: Sprite[] = []
let AmountsOfEnemys = 0
let Defense = 0
let PlayerLevel = 0
let Money = 0
let HP: StatusBarSprite = null
let ActionName: TextSprite = null
let cam: Sprite = null
let mySprite: Sprite = null
let FleeChance = 0
let comsumableinventoryinvisible = false
let CurrentEnemysInFight = 0
let ActionDisplayer: TextSprite = null
let CritDamage = 0
let Damage = 0
let CritChance = 0
let TargetedEnemy: Sprite = null
let PlayerTarget: Sprite = null
let SelectedAction: Inventory.Item = null
let PlayersTurn = false
let Targeting = 0
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
    if (!(PlayersTurn)) {
        PlayersTurn = true
    }
    if (CurrentEnemysInFight == 0) {
        timer.after(1500, function () {
            game.gameOver(true)
        })
    }
})
game.onUpdate(function () {
    SelectedAction = ChoicesInFight.get_items()[ChoicesInFight.get_number(ToolbarNumberAttribute.SelectedIndex)]
    if (ChoicesInFight.get_items()[ChoicesInFight.get_number(ToolbarNumberAttribute.SelectedIndex)]) {
        item = ChoicesInFight.get_items()[ChoicesInFight.get_number(ToolbarNumberAttribute.SelectedIndex)]
        ActionName.setText(item.get_text(ItemTextAttribute.Name))
    }
})
game.onUpdate(function () {
    if (Targeting == 1) {
        grid.place(PlayerTarget, tiles.getTileLocation(11, 6))
    } else if (Targeting == 2) {
        grid.place(PlayerTarget, tiles.getTileLocation(11, 8))
    } else if (Targeting == 3) {
        grid.place(PlayerTarget, tiles.getTileLocation(11, 10))
    }
})
