﻿namespace MapGeneration.Core.Interfaces
{
	using System.Collections.Generic;
	using ConfigurationSpaces;
	using GeneralAlgorithms.DataStructures.Common;

	public interface IConfigurationSpaces<in TNode, TShape, TConfiguration> : IRandomInjectable
	{
		IntVector2 GetRandomIntersectionPoint(TConfiguration mainConfiguration, IList<TConfiguration> configurations);

		IList<OrthogonalLine> GetMaximumIntersection(TConfiguration mainConfiguration, IList<TConfiguration> configurations);

		TShape GetRandomShape(TNode node);

		bool CanPerturbShape(TNode node);

		IReadOnlyCollection<TShape> GetShapesForNode(TNode node);

		IEnumerable<TShape> GetAllShapes();

		bool HaveValidPosition(TConfiguration configuration1, TConfiguration configuration2);

		ConfigurationSpace GetConfigurationSpace(TShape shape1, TShape shape2);
	}
}