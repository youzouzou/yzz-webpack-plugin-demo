const pluginName = 'yzzWebpackTestPlugin';

class YzzWebpackTestPlugin {
  apply(compiler) {
    compiler.hooks.initialize.tap(pluginName, () => {
      console.log('1、webpack initialize');
    });
    compiler.hooks.shouldEmit.tap(pluginName, () => {
      console.log('2、webpack shouldEmit');
    });
    compiler.hooks.done.tap(pluginName, (stats) => {
      console.log('3、webpack done');
      // console.log(stats.hasErrors())
      // console.log(stats.toJson())
      // console.log(stats.compilation.children.map(child => child.getStats().hasErrors()))
    });
    compiler.hooks.afterDone.tap(pluginName, (stats) => {
      console.log('4、webpack afterDone');
      if (stats){
        // console.log("统计信息", stats.toString());
      }
    });
    compiler.hooks.additionalPass.tap(pluginName, () => {
      console.log('5、webpack additionalPass');
    });
    compiler.hooks.beforeRun.tap(pluginName, () => {
      console.log('6、webpack beforeRun');
    });
    compiler.hooks.run.tap(pluginName, () => {
      console.log('7、webpack run');
    });
    compiler.hooks.emit.tap(pluginName, () => {
      console.log('8、webpack emit');
    });
    compiler.hooks.assetEmitted.tap(pluginName, () => {
      console.log('9、webpack assetEmitted');
    });
    compiler.hooks.afterEmit.tap(pluginName, () => {
      console.log('10、webpack afterEmit');
    });
    compiler.hooks.thisCompilation.tap(pluginName, () => {
      console.log('11、webpack thisCompilation');
    });
    compiler.hooks.compilation.tap(pluginName, () => {
      console.log('12、webpack compilation');
    });
    compiler.hooks.normalModuleFactory.tap(pluginName, () => {
      console.log('13、webpack normalModuleFactory');
    });
    compiler.hooks.contextModuleFactory.tap(pluginName, () => {
      console.log('14、webpack contextModuleFactory');
    });
    compiler.hooks.beforeCompile.tap(pluginName, () => {
      console.log('15、webpack beforeCompile');
    });
    compiler.hooks.compile.tap(pluginName, () => {
      console.log('16、webpack compile');
    });
    compiler.hooks.contextModuleFactory.tap(pluginName, () => {
      console.log('17、webpack contextModuleFactory');
    });
    compiler.hooks.make.tap(pluginName, () => {
      console.log('18、webpack make');
    });
    compiler.hooks.finishMake.tap(pluginName, () => {
      console.log('19、webpack finishMake');
    });
    compiler.hooks.afterCompile.tap(pluginName, () => {
      console.log('20、webpack afterCompile');
    });
    compiler.hooks.watchRun.tap(pluginName, () => {
      console.log('21、webpack watchRun');
    });
    compiler.hooks.failed.tap(pluginName, () => {
      console.log('22、webpack failed');
    });
    compiler.hooks.invalid.tap(pluginName, () => {
      console.log('23、webpack invalid');
    });
    compiler.hooks.watchClose.tap(pluginName, () => {
      console.log('24、webpack watchClose');
    });
    compiler.hooks.shutdown.tap(pluginName, () => {
      console.log('25、webpack shutdown');
    });
    compiler.hooks.infrastructureLog.tap(pluginName, (name, type, args) => {
      console.log('26、webpack infrastructureLog');
    });
    // TODO: 下面这几个将来可能会被移除
    // compiler.hooks.environment.tap(pluginName, () => {
    //   console.log('27、webpack environment');
    // });
    // compiler.hooks.afterEnvironment.tap(pluginName, () => {
    //   console.log('28、webpack afterEnvironment');
    // });
    // compiler.hooks.afterPlugins.tap(pluginName, () => {
    //   console.log('29、webpack afterPlugins');
    // });
    // compiler.hooks.afterResolvers.tap(pluginName, () => {
    //   console.log('30、webpack afterResolvers');
    // });
    // compiler.hooks.entryOption.tap(pluginName, () => {
    //   console.log('31、webpack entryOption');
    // });
  }
}

module.exports = YzzWebpackTestPlugin;