const Operators: Map<string, string> = new Map([
    //======================================================================================
    //Define the AlertFusion specific filter operators here which will be passed to the API
    //======================================================================================
    //string
    ['contains', ':like:'],
    ['doesNotContain', ':notlike:'],
    ['equals', ':eq:'],
    ['doesNotEqual', ':ne:'],
    ['startsWith', ':bw:'],
    ['endsWith', ':ew:'],
    ['isEmpty', ':isnull:'],
    ['isNotEmpty', ':notnull:'],
    ['isAnyOf', ':in:'],

    //date & bool is
    ['is', ':eq:'],
    ['not', ':ne:'],
    ['after', ':gt:'],
    ['onOrAfter', ':ge:'],
    ['before', ':lt:'],
    ['onOrBefore', ':le:'],

])

export default Operators