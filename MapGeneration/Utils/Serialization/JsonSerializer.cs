﻿using MapGeneration.Core.MapLayouts;
using MapGeneration.Utils.Interfaces;

namespace MapGeneration.Utils.Serialization
{
	using System.Collections.Generic;
	using System.IO;
	using System.Linq;
    using Newtonsoft.Json;

	/// <summary>
	/// JSON serializer.
	/// </summary>
	/// <typeparam name="TNode"></typeparam>
	public class JsonSerializer<TNode> : ISerializer<TNode>
	{
		private readonly ModelConverter modelConverter = new ModelConverter();

		/// <summary>
		/// Serializes a given layout to JSON.
		/// </summary>
		/// <param name="layout"></param>
		/// <param name="writer"></param>
		public void Serialize(MapLayout<TNode> layout, StreamWriter writer)
		{
			var json = JsonConvert.SerializeObject(
				layout.Rooms.Select(x => modelConverter.GetRoomModel(x)),
				Formatting.Indented
			);
			writer.Write(json);
		}

		/// <summary>
		/// Serializes given layouts to JSON.
		/// </summary>
		/// <param name="layouts"></param>
		/// <param name="writer"></param>
		public void Serialize(IList<MapLayout<TNode>> layouts, StreamWriter writer)
		{
			var json = JsonConvert.SerializeObject(
				layouts.Select(x => x.Rooms.Select(y => modelConverter.GetRoomModel(y))),
				Formatting.Indented
			);
			writer.Write(json);
		}
	}
}