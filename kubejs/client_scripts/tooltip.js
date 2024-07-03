onEvent('item.tooltip', tooltip=>{
    tooltip.addAdvanced('kubejs:rune_of_yin_and_yang',(item, advanced, text)=>{
        if(!tooltip.shift){
            text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
        }else{
            text.add(1,Text.of('真の力は失われてしまったようだ。'))
            text.add(2,Text.of('何か起こせば力を取り戻せるかもしれない。'))
        }
    })
})