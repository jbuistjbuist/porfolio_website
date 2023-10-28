const getMatchesFromEmbeddings = async (embeddings, pinecone, topK) => {
  if (!process.env.PINECONE_INDEX) {
    throw new Error('PINECONE_INDEX is not set');
  }

  const index = pinecone.index(process.env.PINECONE_INDEX);
  const queryRequest = {
    vector: embeddings,
    topK,
    includeMetadata: true,
  };
  try {
    const queryResult = await index.query(
      queryRequest,
    );
    return (
      queryResult.matches?.map((match) => ({
        ...match,
        metadata: match.metadata,
      })) || []
    );
  } catch (e) {
    throw new Error(`Error querying embeddings: ${e}`);
  }
};

export { getMatchesFromEmbeddings };
