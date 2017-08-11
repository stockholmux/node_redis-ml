# Redis-ML Module plugin for node_redis

This package allows [node_redis](https://github.com/NodeRedis/node_redis) (2.8+) to interface with the Redis module [redis-ml](https://github.com/RedisLabsModules/redis-ml).

To use this module, you will need Redis 4.0 or higher and the rebloom module installed.

## Usage

```
var
   redis       = require('redis'),
   ml          = require('redis-ml');

ml(redis);
```

The ReBloom commands will be mapped to javascript-friendly names (`ML.FOREST.ADD` becomes `client.ml_forest_add`).